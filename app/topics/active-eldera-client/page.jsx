import ActiveElderaClientKeywordPage, { generateMetadata } from './active-eldera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaClientKeywordPage />;
}
