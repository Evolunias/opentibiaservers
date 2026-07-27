import LumineraResetKeywordPage, { generateMetadata } from './luminera-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraResetKeywordPage />;
}
