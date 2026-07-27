import NoResetElderaKeywordPage, { generateMetadata } from './no-reset-eldera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaKeywordPage />;
}
