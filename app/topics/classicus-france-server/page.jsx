import ClassicusFranceServerKeywordPage, { generateMetadata } from './classicus-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusFranceServerKeywordPage />;
}
