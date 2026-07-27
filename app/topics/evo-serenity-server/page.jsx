import EvoSerenityServerKeywordPage, { generateMetadata } from './evo-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoSerenityServerKeywordPage />;
}
