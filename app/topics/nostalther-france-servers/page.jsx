import NostaltherFranceServersKeywordPage, { generateMetadata } from './nostalther-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherFranceServersKeywordPage />;
}
