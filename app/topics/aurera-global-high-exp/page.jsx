import AureraGlobalHighExpKeywordPage, { generateMetadata } from './aurera-global-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalHighExpKeywordPage />;
}
