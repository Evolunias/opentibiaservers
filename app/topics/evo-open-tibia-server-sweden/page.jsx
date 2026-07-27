import EvoOpenTibiaServerSwedenKeywordPage, { generateMetadata } from './evo-open-tibia-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerSwedenKeywordPage />;
}
