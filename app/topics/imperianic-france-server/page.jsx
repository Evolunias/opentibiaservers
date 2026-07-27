import ImperianicFranceServerKeywordPage, { generateMetadata } from './imperianic-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicFranceServerKeywordPage />;
}
