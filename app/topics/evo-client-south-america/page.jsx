import EvoClientSouthAmericaKeywordPage, { generateMetadata } from './evo-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClientSouthAmericaKeywordPage />;
}
