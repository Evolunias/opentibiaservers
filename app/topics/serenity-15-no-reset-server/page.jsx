import Serenity15NoResetServerKeywordPage, { generateMetadata } from './serenity-15-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15NoResetServerKeywordPage />;
}
