import ActiveNostaltherKeywordPage, { generateMetadata } from './active-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherKeywordPage />;
}
