import MistOfDeathResetKeywordPage, { generateMetadata } from './mist-of-death-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathResetKeywordPage />;
}
