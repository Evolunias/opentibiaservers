import NoResetXanteriaClientKeywordPage, { generateMetadata } from './no-reset-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaClientKeywordPage />;
}
