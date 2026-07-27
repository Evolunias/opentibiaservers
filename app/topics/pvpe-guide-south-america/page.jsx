import PvpeGuideSouthAmericaKeywordPage, { generateMetadata } from './pvpe-guide-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideSouthAmericaKeywordPage />;
}
