import EvoOpenTibiaServerSouthAmericaKeywordPage, { generateMetadata } from './evo-open-tibia-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOpenTibiaServerSouthAmericaKeywordPage />;
}
