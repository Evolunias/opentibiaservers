import CurrentShadowcoresOtKeywordPage, { generateMetadata } from './current-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentShadowcoresOtKeywordPage />;
}
