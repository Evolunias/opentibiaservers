import ThorniaFranceServersKeywordPage, { generateMetadata } from './thornia-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaFranceServersKeywordPage />;
}
