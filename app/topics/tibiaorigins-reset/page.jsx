import TibiaoriginsResetKeywordPage, { generateMetadata } from './tibiaorigins-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsResetKeywordPage />;
}
