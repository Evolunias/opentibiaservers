import ActiveNostaltherOtsKeywordPage, { generateMetadata } from './active-nostalther-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherOtsKeywordPage />;
}
