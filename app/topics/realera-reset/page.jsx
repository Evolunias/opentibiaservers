import RealeraResetKeywordPage, { generateMetadata } from './realera-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraResetKeywordPage />;
}
