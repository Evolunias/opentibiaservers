import EvoServerSouthAmericaKeywordPage, { generateMetadata } from './evo-server-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerSouthAmericaKeywordPage />;
}
