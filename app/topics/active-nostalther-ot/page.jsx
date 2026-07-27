import ActiveNostaltherOtKeywordPage, { generateMetadata } from './active-nostalther-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNostaltherOtKeywordPage />;
}
