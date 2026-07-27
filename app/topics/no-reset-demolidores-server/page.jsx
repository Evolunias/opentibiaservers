import NoResetDemolidoresServerKeywordPage, { generateMetadata } from './no-reset-demolidores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDemolidoresServerKeywordPage />;
}
