import ActiveShadowcoresClientKeywordPage, { generateMetadata } from './active-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresClientKeywordPage />;
}
