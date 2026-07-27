import ActiveMadnessaliveClientKeywordPage, { generateMetadata } from './active-madnessalive-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveClientKeywordPage />;
}
