import Serenity14NoResetServerKeywordPage, { generateMetadata } from './serenity-14-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity14NoResetServerKeywordPage />;
}
