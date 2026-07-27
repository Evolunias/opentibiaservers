import NtoStarResetKeywordPage, { generateMetadata } from './nto-star-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarResetKeywordPage />;
}
