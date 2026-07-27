import ThorniaFranceServerKeywordPage, { generateMetadata } from './thornia-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaFranceServerKeywordPage />;
}
