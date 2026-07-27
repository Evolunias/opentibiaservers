import LowrateNostaltherGuideKeywordPage, { generateMetadata } from './lowrate-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNostaltherGuideKeywordPage />;
}
