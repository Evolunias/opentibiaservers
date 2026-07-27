import ActiveNostaltherGuideKeywordPage, { generateMetadata } from './active-nostalther-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherGuideKeywordPage />;
}
