import Serenity13NoResetServerKeywordPage, { generateMetadata } from './serenity-13-no-reset-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity13NoResetServerKeywordPage />;
}
