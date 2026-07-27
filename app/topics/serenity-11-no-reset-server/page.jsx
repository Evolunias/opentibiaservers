import Serenity11NoResetServerKeywordPage, { generateMetadata } from './serenity-11-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11NoResetServerKeywordPage />;
}
