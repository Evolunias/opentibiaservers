import EvoOpenTibiaServerGermanyKeywordPage, { generateMetadata } from './evo-open-tibia-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerGermanyKeywordPage />;
}
