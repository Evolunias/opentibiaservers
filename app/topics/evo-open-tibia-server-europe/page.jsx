import EvoOpenTibiaServerEuropeKeywordPage, { generateMetadata } from './evo-open-tibia-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerEuropeKeywordPage />;
}
