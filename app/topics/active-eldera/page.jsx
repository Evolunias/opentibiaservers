import ActiveElderaKeywordPage, { generateMetadata } from './active-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveElderaKeywordPage />;
}
