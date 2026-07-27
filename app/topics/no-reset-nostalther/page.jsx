import NoResetNostaltherKeywordPage, { generateMetadata } from './no-reset-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNostaltherKeywordPage />;
}
