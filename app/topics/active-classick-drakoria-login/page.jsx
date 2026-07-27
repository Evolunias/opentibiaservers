import ActiveClassickDrakoriaLoginKeywordPage, { generateMetadata } from './active-classick-drakoria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassickDrakoriaLoginKeywordPage />;
}
