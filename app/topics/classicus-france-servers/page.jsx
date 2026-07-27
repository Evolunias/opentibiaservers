import ClassicusFranceServersKeywordPage, { generateMetadata } from './classicus-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusFranceServersKeywordPage />;
}
