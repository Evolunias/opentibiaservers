import NoResetThorniaClientKeywordPage, { generateMetadata } from './no-reset-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThorniaClientKeywordPage />;
}
