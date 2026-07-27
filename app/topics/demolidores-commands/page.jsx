import DemolidoresCommandsKeywordPage, { generateMetadata } from './demolidores-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresCommandsKeywordPage />;
}
