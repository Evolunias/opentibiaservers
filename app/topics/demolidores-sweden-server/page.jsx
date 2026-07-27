import DemolidoresSwedenServerKeywordPage, { generateMetadata } from './demolidores-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSwedenServerKeywordPage />;
}
