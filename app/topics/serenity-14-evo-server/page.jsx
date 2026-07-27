import Serenity14EvoServerKeywordPage, { generateMetadata } from './serenity-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14EvoServerKeywordPage />;
}
