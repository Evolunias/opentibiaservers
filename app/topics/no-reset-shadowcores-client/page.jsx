import NoResetShadowcoresClientKeywordPage, { generateMetadata } from './no-reset-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetShadowcoresClientKeywordPage />;
}
