import ActiveCoxaotLoginKeywordPage, { generateMetadata } from './active-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotLoginKeywordPage />;
}
