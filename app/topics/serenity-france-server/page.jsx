import SerenityFranceServerKeywordPage, { generateMetadata } from './serenity-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityFranceServerKeywordPage />;
}
