import NoResetNostaltherClientKeywordPage, { generateMetadata } from './no-reset-nostalther-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherClientKeywordPage />;
}
