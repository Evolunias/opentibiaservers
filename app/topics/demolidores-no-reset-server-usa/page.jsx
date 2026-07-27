import DemolidoresNoResetServerUsaKeywordPage, { generateMetadata } from './demolidores-no-reset-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresNoResetServerUsaKeywordPage />;
}
