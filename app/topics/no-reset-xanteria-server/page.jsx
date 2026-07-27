import NoResetXanteriaServerKeywordPage, { generateMetadata } from './no-reset-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaServerKeywordPage />;
}
