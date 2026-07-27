import CustomShadowcoresPrivateServerKeywordPage, { generateMetadata } from './custom-shadowcores-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresPrivateServerKeywordPage />;
}
