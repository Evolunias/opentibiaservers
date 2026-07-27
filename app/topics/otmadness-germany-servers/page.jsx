import OtmadnessGermanyServersKeywordPage, { generateMetadata } from './otmadness-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessGermanyServersKeywordPage />;
}
