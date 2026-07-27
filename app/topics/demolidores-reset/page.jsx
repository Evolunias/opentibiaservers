import DemolidoresResetKeywordPage, { generateMetadata } from './demolidores-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresResetKeywordPage />;
}
