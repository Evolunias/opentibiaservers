import TibijkaResetKeywordPage, { generateMetadata } from './tibijka-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaResetKeywordPage />;
}
